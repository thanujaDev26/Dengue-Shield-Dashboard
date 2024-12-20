import PropTypes from 'prop-types';
import { useState, useContext, createContext } from 'react';
import {
    HomeIcon,
    BuildingOfficeIcon,
    ChartBarIcon,
    ArrowLeftOnRectangleIcon,
    CloudIcon,
    UserCircleIcon,
    CogIcon,
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import Profile from "../UserProfile/Profile.jsx";
import './navigations.css'

const SidebarContext = createContext();

export default function Sidebar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm px-4 py-0 sidebar">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-4 py-7 md:py-2">
                    {expanded && <h1 className="text-lg font-bold">Menu</h1>}
                    <button
                        onClick={() => setExpanded((current) => !current)}
                        className="text-black flex items-center justify-center"
                    >
                        {expanded ? (
                            <XMarkIcon className="w-6 h-6 text-black" />
                        ) : (
                            <Bars3Icon className="w-6 h-6 text-black" />
                        )}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className={`flex-1 ${expanded ? '' : ''} sidebar-button space-y-4 md:space-y-0`}>
                        {/* Navigation Items */}
                        <SidebarItem to="/dashboard" icon={<HomeIcon className="w-8 h-8 md:w-6 md:h-6" />} text="Dashboard" className="sidebar-button-item"/>
                        <SidebarItem to="/moh-offices" icon={<BuildingOfficeIcon className="w-8 h-8 md:w-6 md:h-6" />} text="MOH Offices" />
                        <SidebarItem to="/recent-activities" icon={<ChartBarIcon className="w-8 h-8 md:w-6 md:h-6" />} text="Recent Activities" />
                        <SidebarItem to="/deployments" icon={<CloudIcon className="w-8 h-8 md:w-6 md:h-6" />} text="Deployments" />
                        <SidebarItem to="/admins" icon={<UserCircleIcon className="w-8 h-8 md:w-6 md:h-6" />} text="Admins" />
                        <SidebarItem to="/settings" icon={<CogIcon className="w-8 h-8 md:w-6 md:h-6" />} text="Settings" />
                        <SidebarItem to="/logout" icon={<ArrowLeftOnRectangleIcon className="w-8 h-8 md:w-6 md:h-6" />} text="Logout" />
                    </ul>
                </SidebarContext.Provider>

                {/* Sidebar Footer (User Info) */}
                <div>
                    <Profile expanded={expanded} />
                </div>
            </nav>
        </aside>
    );
}


function SidebarItem({to, icon, text, active}) {
    const {expanded} = useContext(SidebarContext);

    return (
        <li
            className={`relative flex items-center py-3 px-5 my-2 font-medium rounded-md cursor-pointer transition-colors group ${
                active
                    ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
                    : 'hover:bg-indigo-50 text-gray-600'
            }`}
        >
            <Link to={to} className="flex items-center w-full">
                <div className="flex items-center justify-center w-12 h-12">{icon}</div>
                <span className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>
                    {text}
                </span>
            </Link>
        </li>
    );
}

SidebarItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    active: PropTypes.bool,
};

SidebarItem.defaultProps = {
    active: false,
};
