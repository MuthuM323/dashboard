import React from 'react';
import { FaUser, FaCog, FaBell, FaEnvelope } from 'react-icons/fa';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

const Header: React.FC = () => {
    return (
        <div className="w-full h-24 bg-gray-900 text-white flex items-center justify-between ">

            <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-400"
            />
            <div className="flex items-center space-x-4 mx-4">
                <div className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded-full">
                    <MdOutlineEmail className="text-md" />
                </div>
                <div className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded-full">

                    <IoSettingsOutline className="text-md" />
                </div>
                <div className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded-full">

                    <IoIosNotificationsOutline className="text-md" />
                </div>
                {/* <div className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded-full"> */}

                    <img src="/img/profile.jpg" alt="profile" className='rounded-full h-8 w-8' />                </div>

            {/* </div>   */}
        </div>
    );
};

export default Header;
