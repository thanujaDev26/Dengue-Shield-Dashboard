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
    const [activeItem, setActiveItem] = useState('/dashboard');

    const handleItemClick = (path) => {
        setActiveItem(path);
    };

    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm px-4 py-0 sidebar">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-4 py-2 md:py-7">

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
                    <ul className={`flex-1 ${expanded ? '' : ''} sidebar-button space-y-0 sm:space-y-4`}>
                        <SidebarItem
                            to="/dashboard"
                            icon={<HomeIcon className="w-5 h-5 sm:w-8 sm:h-8" />}
                            text="Dashboard"
                            active={activeItem === '/dashboard'}
                            onClick={handleItemClick}
                        />
                        <SidebarItem
                            to="/moh-offices"
                            icon={<BuildingOfficeIcon className="w-5 h-5 sm:w-8 sm:h-8" />}
                            text="MOH Offices"
                            active={activeItem === '/moh-offices'}
                            onClick={handleItemClick}
                        />
                        <SidebarItem
                            to="/recent-activities"
                            icon={<ChartBarIcon className="w-5 h-5 sm:w-8 sm:h-8" />}
                            text="Recent Activities"
                            active={activeItem === '/recent-activities'}
                            onClick={handleItemClick}
                        />
                        <SidebarItem
                            to="/deployments"
                            icon={<CloudIcon className="w-5 h-5 sm:w-8 sm:h-8" />}
                            text="Deployments"
                            active={activeItem === '/deployments'}
                            onClick={handleItemClick}
                        />
                        <SidebarItem
                            to="/admins"
                            icon={<UserCircleIcon className="w-5 h-5 sm:w-8 sm:h-8" />}
                            text="Admins"
                            active={activeItem === '/admins'}
                            onClick={handleItemClick}
                        />
                        <SidebarItem
                            to="/settings"
                            icon={<CogIcon className="w-5 h-5 sm:w-8 sm:h-8" />}
                            text="Settings"
                            active={activeItem === '/settings'}
                            onClick={handleItemClick}
                        />
                        <SidebarItem
                            to="/logout"
                            icon={<ArrowLeftOnRectangleIcon className="w-5 h-5 sm:w-8 sm:h-8" />}
                            text="Logout"
                            active={activeItem === '/logout'}
                            onClick={handleItemClick}
                        />
                    </ul>
                </SidebarContext.Provider>
                <div>
                    <Profile expanded={expanded} />
                </div>
            </nav>
        </aside>
    );
}

function SidebarItem({ to, icon, text, active, onClick }) {
    const { expanded } = useContext(SidebarContext);

    return (
        <li
            onClick={() => onClick(to)}
            className={`relative flex items-center py-3 px-5 my-2 font-medium rounded-md cursor-pointer transition-colors group ${
                active
                    ? 'bg-black text-white'
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
    onClick: PropTypes.func.isRequired,
};

SidebarItem.defaultProps = {
    active: false,
};
