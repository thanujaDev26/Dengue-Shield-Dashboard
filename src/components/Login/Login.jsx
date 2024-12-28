import { useAuth } from '../Authentications/AuthContext.jsx';

const Login = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        const userData = { name: 'John Doe', email: 'john.doe@example.com' };
        login(userData);
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <button
                    onClick={handleLogin}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
