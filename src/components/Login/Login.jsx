import { useAuth } from '../Authentications/AuthContext.jsx';

const Login = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        const userData = { name: 'John Doe', email: 'john.doe@example.com' };
        login(userData);
    };

    return (
        <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-600 via-gray-300 to-gray-600">
            
            {/*Login Container*/}
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
                <form action={handleLogin}>
                    {/*Username Input*/}
                    <div className="mb-4">
                    <label form="username" className="block text-sm font-medium text-gray-600">Username</label>
                    <div className="relative mt-1">
                        <input
                        id="username"
                        type="text"
                        placeholder="Type your username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                        />
                    </div>
                    </div>

                    {/*Password Input*/}
                    <div className="mb-4">
                    <label form="password" className="block text-sm font-medium text-gray-600">Password</label>
                    <div className="relative mt-1">
                        <input
                        id="password"
                        type="password"
                        placeholder="Type your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                        />
                    </div>
                    </div>

                    {/* Login Button */}
                    <button type="submit"
                    onClick={handleLogin}
                            className="w-full bg-gradient-to-r from-gray-400 to-gray-600 text-white py-2 rounded-lg hover:from-gray-600 hover:to-gray-400 focus:ring-2">
                    <b>Login</b>
                    </button>
                </form>

                {/* Forgot Password */}
                <p className="mt-4 text-center text-sm text-gray-600">
                <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
                </p>

                {/* Or Divider */}
                <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="px-2 text-gray-500 text-sm">Or</span>
                <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                {/* Social Login */}
                <div className="flex justify-center space-x-4">
                <button className="p-3 bg-blue-600 text-white rounded-full">
                    <i className="fab fa-facebook-f"></i>
                </button>
                <button className="p-3 bg-red-500 text-white rounded-full">
                    <i className="fab fa-google"></i>
                </button>
                <button className="p-3 bg-blue-400 text-white rounded-full">
                    <i className="fab fa-twitter"></i>
                </button>
                </div>

                {/* Sign Up */}
                <p className="mt-6 text-center text-sm text-gray-600">
                Don't have an account? 
                <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>

        </section>
    );
};

export default Login;
