
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Office from "./components/MOH/Office.jsx";
import RecentActivities from "./components/Activities/RecentActivities.jsx";
import Deployments from "./components/Sensors-details/Deployments.jsx";
import Admins from "./components/Admin-users/Admins.jsx";
import Logout from "./components/Logout/Logout.jsx";
import Sidebar from "./components/Navigations/Navbar.jsx";

function App() {


  return (
    <div>
        <BrowserRouter>
            <div className="flex h-screen">
                <Sidebar/>
                <div className="flex-1 bg-white overflow-y-auto p-6">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/dashboard" element={<Home/>} />
                        <Route path="/moh-offices" element={<Office />} />
                        <Route path="/recent-activities" element={<RecentActivities/>} />
                        <Route path="/deployments" element={<Deployments/>} />
                        <Route path="/admins" element={<Admins/>} />
                        <Route path="/settings" element={<Settings/>} />
                        <Route path="/logout" element={<Logout/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App
