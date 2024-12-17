import PropTypes from 'prop-types';
import { Bell, MoreVertical } from 'lucide-react';

export default function Profile({ expanded }) {

    const email = 'thanujapriyadarshane26@gmail.com';
    const firstName = 'Thanuja';
    const lastName = 'Priyadarshane';
    return (
        <div>
            <div className="border-t flex p-4 items-center">
                <img
                    src={`https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=c7d2fe&color=3730a3&bold=true`}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-md"
                />

                <div
                    className={`flex justify-between items-center overflow-hidden transition-all ${
                        expanded ? 'w-52 ml-3' : 'w-0'
                    }`}
                >
                    <div className="leading-4">
                        <h4 className="font-semibold">Thanuja</h4>
                    </div>

                    {/* Notification Bell Icon */}
                    <div className="relative ml-3">
                        <button
                            onClick={() => alert('Notifications clicked')}
                            className="flex items-center justify-center"
                        >
                            <Bell size={25} className="text-gray-600"/>
                            <span
                                className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                            >
                                4
                            </span>
                        </button>
                    </div>

                    <MoreVertical size={25}/>
                </div>
            </div>
        </div>
    );
}

Profile.propTypes = {
    expanded: PropTypes.bool,
};
