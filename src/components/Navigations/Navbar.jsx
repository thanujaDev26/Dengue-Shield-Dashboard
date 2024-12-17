import {
    HomeIcon,
    BuildingOfficeIcon,
    ChartBarIcon,
    ArrowLeftOnRectangleIcon,
    Bars3Icon,
    CloudIcon,
    XMarkIcon,
    UserCircleIcon,
    CogIcon
} from "@heroicons/react/24/solid";
import { useState } from "react";
import './navigations.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`text-black h-screen ${isSidebarOpen ? "w-64" : "w-16"} duration-1000 flex flex-col sidebar`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-4 py-7">
                    {isSidebarOpen && <h1 className="text-lg font-bold">Menu</h1>}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="text-black"
                    >
                        {isSidebarOpen ? (
                            <XMarkIcon className="w-6 h-6" />
                        ) : (
                            <Bars3Icon className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Sidebar Links */}
                <nav className="flex-1">
                    <ul className="space-y-3 sidebar-button">
                        <li>
                            <Link to="/dashboard" className="flex items-center px-4 py-7 hover:bg-black hover:text-white rounded-3xl duration-500">
                                <HomeIcon className="w-6 h-6" />
                                {isSidebarOpen && <span className="ml-3">Dashboard</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="/moh-offices" className="flex items-center px-4 py-7 hover:bg-black hover:text-white rounded-3xl duration-500">
                                <BuildingOfficeIcon className="w-6 h-6" />
                                {isSidebarOpen && <span className="ml-3">MOH Offices</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="/recent-activities" className="flex items-center px-4 py-7 hover:bg-black hover:text-white rounded-3xl duration-500">
                                <ChartBarIcon className="w-6 h-6" />
                                {isSidebarOpen && <span className="ml-3">Recent Activities</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="/deployments" className="flex items-center px-4 py-7 hover:bg-black hover:text-white rounded-3xl duration-500">
                                <CloudIcon className="w-6 h-6" />
                                {isSidebarOpen && <span className="ml-3">Deployments</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="/admins" className="flex items-center px-4 py-7 hover:bg-black hover:text-white rounded-3xl duration-500">
                                <UserCircleIcon className="w-6 h-6" />
                                {isSidebarOpen && <span className="ml-3">Admins</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="/settings" className="flex items-center px-4 py-7 hover:bg-black hover:text-white rounded-3xl duration-500">
                                <CogIcon className="w-6 h-6" />
                                {isSidebarOpen && <span className="ml-3">Settings</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="/logout" className="flex items-center px-4 py-7 hover:bg-black hover:text-white rounded-3xl duration-500">
                                <ArrowLeftOnRectangleIcon className="w-6 h-6" />
                                {isSidebarOpen && <span className="ml-3">Logout</span>}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
