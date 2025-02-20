import { useState } from "react";
import axios from "axios";
import { useAuth } from "../Authentications/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await axios.post("http://18.142.56.101:3001/api/v1/sign-in", {
                email,
                password,
            });
            if (response.data.status === "success") {
                login(response.data.user); 
            } else {
                alert("Invalid Credentials");
            }
            console.log("Login successful!", data);
        } catch (error) {
            setError(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-black">
           
            <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 w-full max-w-md border border-white/20">
                <h2 className="text-3xl font-semibold text-center text-white mb-6">Welcome Back</h2>
                
                {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}
                
                <form className="space-y-4" onSubmit={handleLogin}>
                
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80">Email</label>
                        <div className="relative mt-1">
                            <input
                                id="email"
                                type="email"
                                placeholder="Type your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-white/20 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-white/50"
                            />
                        </div>
                    </div>

            
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white/80">Password</label>
                        <div className="relative mt-1">
                            <input
                                id="password"
                                type="password"
                                placeholder="Type your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-white/20 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-white/50"
                            />
                        </div>
                    </div>

                   
                    <button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-gray-400 to-gray-700 text-white py-2 rounded-lg font-semibold tracking-wide hover:from-gray-700 hover:to-gray-500 transition duration-300 focus:ring-2 focus:ring-white"
                    >
                        Login
                    </button>
                </form>

                
                <p className="mt-4 text-center text-sm text-white/70">
                    <a href="#" className="text-blue-400 hover:underline">Forgot password?</a>
                </p>

             
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-white/30"></div>
                    <span className="px-2 text-white/70 text-sm">Or</span>
                    <div className="flex-grow h-px bg-white/30"></div>
                </div>

               
                <div className="space-y-3 mt-6">
                    <button className="flex items-center justify-center w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
                        <i className="fab fa-facebook-f text-lg mr-2"></i> Continue with Facebook
                    </button>
                    <button className="flex items-center justify-center w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-400 transition">
                        <i className="fab fa-google text-lg mr-2"></i> Continue with Google
                    </button>
                </div>

             
                <p className="mt-6 text-center text-sm text-white/70">
                    Don't have an account?  
                    <a href="/signup" className="text-blue-400 hover:underline"> Sign up</a>
                </p>
            </div>
        </section>
    );
};

export default Login;
