import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/Authentications/AuthContext';
import ProtectedRoute from './components/Authentications/ProtectedRoute';
import Home from './components/Home/Home.jsx';
import Settings from './components/Settings/Settings.jsx';
import Office from './components/MOH/Office.jsx';
import RecentActivities from './components/Activities/RecentActivities.jsx';
import Deployments from './components/Sensors-details/Deployments.jsx';
import Admins from './components/Admin-users/Admins.jsx';
import Logout from './components/Logout/Logout.jsx';
import Sidebar from './components/Navigations/Navbar.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/Sign-up/Signup.jsx';

function App() {
    return (
        <AuthProvider>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Protected Routes */}
                <Route
                    path="/*"
                    element={
                        <ProtectedRoute>
                            <div className="flex h-screen">
                                <Sidebar />
                                <div className="flex-1 bg-white overflow-y-auto p-6">
                                    <Routes>
                                        <Route path="/dashboard" element={<Home />} />
                                        <Route path="/moh-offices" element={<Office />} />
                                        <Route path="/recent-activities" element={<RecentActivities />} />
                                        <Route path="/deployments" element={<Deployments />} />
                                        <Route path="/admins" element={<Admins />} />
                                        <Route path="/settings" element={<Settings />} />
                                        <Route path="/" element={<Logout />} />
                                    </Routes>
                                </div>
                            </div>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </AuthProvider>
    );
}

export default App;
